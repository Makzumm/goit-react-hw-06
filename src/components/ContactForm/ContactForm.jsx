import css from './ContactForm.module.css';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const dataSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too short!").max(50, "Too long!").required('Required'),
    number: Yup.string().min(3, "Too short!").max(50, "Too long!").required('Required'),
});

const initialValues = {
    name: "",
    number: ""
};

function ContactForm() {
    const dispatch = useDispatch();

    const handleSubmit = (name, number) => {
        dispatch(addContact({ name, number }));
    };


    const nameFieldId = useId();
    const numberFieldId = useId();

    return (
        <Formik initialValues={initialValues} onSubmit={(values, actions) => {
            handleSubmit(values.name, values.number);
            actions.resetForm();
        }} validationSchema={dataSchema}>
            <Form className={css.formElement}>
                <label htmlFor={nameFieldId}>Name</label>
                <Field className={css.dataInputField} type='text' name='name' id={nameFieldId} />
                <ErrorMessage name="name" component="span" />

                <label htmlFor={numberFieldId}>Phone</label>
                <Field className={css.dataInputField} type='text' name='number' id={numberFieldId} />
                <ErrorMessage name="number" component="span" />

                <button className={css.submitButton} type="submit">Add contact</button>
            </Form>
        </Formik>
    );
}

export default ContactForm;