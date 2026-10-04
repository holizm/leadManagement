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
        number
        required
    />
    <Text
        contact
        required
    />
    <Text leadSource />
    <Select
        leadStatus
        options={[
            'new',
            'contacted',
            'qualified',
            'unqualified',
            'converted',
            'lost',
        ]}
        placeholder='state'
        required
    />
    <Select
        leadPriority
        options={[
            'low',
            'normal',
            'high',
        ]}
        placeholder='priority'
    />
    <Text assignedPerson />
    <Numeric expectedValue />
    <DateTime nextFollowUpDate />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
