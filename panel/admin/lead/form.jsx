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
        placeholder='leadManagementNumber'
        property='number'
        required
    />
    <Text
        placeholder='leadManagementContact'
        property='contact'
        required
    />
    <Text
        placeholder='leadManagementLeadSource'
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
        placeholder='leadManagementStatus'
        property='leadStatus'
        required
    />
    <Select
        options={[
            'low',
            'normal',
            'high',
        ]}
        placeholder='leadManagementPriority'
        property='leadPriority'
    />
    <Text
        placeholder='leadManagementAssignedPerson'
        property='assignedPerson'
    />
    <Numeric
        placeholder='leadManagementExpectedValue'
        property='expectedValue'
    />
    <DateTime
        placeholder='leadManagementNextFollowUpDate'
        property='nextFollowUpDate'
    />
    <LongText
        placeholder='leadManagementDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
