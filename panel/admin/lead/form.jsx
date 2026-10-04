import {
    DateTime,
    DialogForm,
    LongText,
    Numeric,
    Select,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Text
        placeholder='number'
        property='number'
        required
    />
    <Text
        placeholder='contact'
        property='contact'
        required
    />
    <Text
        placeholder='leadSource'
        property='leadSource'
    />
    <Select
        options={[
            'new',
            'contacted',
            'qualified',
            'unqualified',
            'converted',
            'lost',
        ]}
        placeholder='state'
        property='leadStatus'
        required
    />
    <Select
        options={[
            'low',
            'normal',
            'high',
        ]}
        placeholder='priority'
        property='leadPriority'
    />
    <Text
        placeholder='assignedPerson'
        property='assignedPerson'
    />
    <Numeric
        placeholder='expectedValue'
        property='expectedValue'
    />
    <DateTime
        placeholder='nextFollowUpDate'
        property='nextFollowUpDate'
    />
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
