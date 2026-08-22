import {
    DateTime,
    List,
    Text,
    Title,
} from 'list'
import Form from './form'

const headers = <>
    <th start>leadManagementLead</th>
    <th>leadManagementNumber</th>
    <th>leadManagementContact</th>
    <th>leadManagementAssignedPerson</th>
    <th>leadManagementNextFollowUpDate</th>
    <th>leadManagementStatus</th>
</>

const row = item => <>
    <td>{item.title}</td>
    <td>{item.number}</td>
    <td>{item.contact?.title}</td>
    <td>{item.assignedPerson?.title}</td>
    <DateTime value={item.nextFollowUpDate} />
    <td>{item.leadStatus}</td>
</>

export default <List
    create={Form}
    filters={<Title />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
