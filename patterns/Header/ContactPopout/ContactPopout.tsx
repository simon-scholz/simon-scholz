import React, {useState} from "react"
import * as Styled from "./ContactPopoutStyles"
import toast from 'react-hot-toast';
import { useForm } from "react-hook-form";
import Spacer, { OutsideClickDetector } from '../../../components/Utils'
import { TextField, TextArea, Label, FormField } from "../../../components/Input";
import Toast from "../../../components/Toast";
import { Button } from "../../../components/Button";

interface IContactPopout {
    onClose: () => void
}

const ContactPopout = ({onClose}: IContactPopout) => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        setLoading(true)
        await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(data, null, 2)
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    reset()
                    document.activeElement.blur();
                    toast.custom(
                        <Toast
                            title="Message successfully sent!"
                            subtitle="I'll be in touch with you soon."
                        />
                        , { duration: 2000 })
                    onClose()
                } else {
                    toast.custom(
                        <Toast
                            title="Something went wrong!"
                            subtitle={<span>If you still want to get in touch, send me an email to <a href="mailto:simonscholz@outlook.com">simonscholz@outlook.com</a></span>}
                            type="error" />
                    )
                }
            })
            .catch(error => {
                toast.custom(
                    <Toast
                        title="Something went wrong!"
                        subtitle={<span>If you still want to get in touch, send me an email to <a href="mailto:simonscholz@outlook.com">simonscholz@outlook.com</a></span>}
                        type="error" />
                )
            })
            .finally(() => setLoading(false))
    };

    return (
        <OutsideClickDetector onOutsideClick={onClose}>
            <Styled.ContactPopoutBase>
                <form onSubmit={handleSubmit(onSubmit)} action="https://api.web3forms.com/submit" method="POST" id="form" style={{ width: "100%" }}>
                    <input type="hidden" value="8fefae58-f534-465c-ac3e-dd47ced38841" {...register("apikey")} />
                    <input type="hidden" value="Simonscholzdesignand.dev Mission Control" {...register("from_name")} />
                    <input type="hidden" value="New submission through personal website" {...register("subject")} />
                    <input type="checkbox" id="" style={{ display: "none" }} {...register("botcheck")}></input>
                    <FormField>
                        <Label htmlFor="email">Email Address</Label>
                        <TextField
                            type="email"
                            id="email"
                            placeholder="you@company.com"
                            {...register("email", { required: true })}
                            error={errors.email}
                        />
                    </FormField>
                    <Spacer />
                    <FormField>
                        <Label htmlFor="message">Your Message</Label>
                        <TextArea
                            rows={5}
                            id="message"
                            placeholder="Your Message"
                            {...register("message", { required: true })}
                            error={errors.message}
                        />
                    </FormField>
                    <Spacer />
                    <Button
                        type="submit"
                        variant="cta"
                        style={{ width: "100%" }}
                        disabled={loading}
                    >
                        Send message
                    </Button>
                </form>
            </Styled.ContactPopoutBase>
        </OutsideClickDetector>
    )
}

export default ContactPopout