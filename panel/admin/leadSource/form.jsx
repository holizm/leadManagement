import {
    DialogForm,
    LongText,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Text
        placeholder='leadManagementCode'
        property='code'
        required
    />
    <LongText
        placeholder='leadManagementDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
