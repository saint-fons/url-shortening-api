import React from 'react'
import Styles from './Styles'
import {Form, Field} from 'react-final-form'


const EnterDataForm = (props) => {

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

    const regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

    const onSubmit = async values => {
        await sleep(300)
        if (regexp.test(values.url)) {
            NewUrlSubmitting(values.url)
        } else {
            return {url: 'Ur missing url'}
        }
    }

    let NewUrlSubmitting = (url) => {
        props.SendingUrlAC(url)
    }

    return (
        <Styles>
            <Form
                onSubmit={onSubmit}
                validate={values => {
                    const errors = {}
                    if (!values.url) {
                        errors.url = 'Required'
                    }
                    return errors
                }}
                render={({
                             submitError,
                             handleSubmit,
                             form,
                             submitting,
                             pristine,
                             values
                         }) => (
                    <form onSubmit={handleSubmit}>
                        <Field name="url">
                            {({input, meta}) => (
                                <div>
                                    <input {...input} type="text" placeholder="Shorten a link here"/>
                                    {(meta.error || meta.submitError) && meta.touched && (
                                        <span>{meta.error || meta.submitError}</span>
                                    )}
                                </div>
                            )}
                        </Field>
                        {submitError && <div className="error">{submitError}</div>}
                        <div className="buttons">
                            <button type="submit" disabled={submitting}>
                                Shorten it!
                            </button>
                            <button
                                type="button"
                                onClick={form.reset}
                                disabled={submitting || pristine}
                            >
                                Reset
                            </button>
                        </div>
                    </form>
                )}
            />
        </Styles>
    )
}

export default EnterDataForm