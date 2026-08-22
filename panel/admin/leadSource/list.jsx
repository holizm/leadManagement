import {
    List,
    Title,
} from 'list'
import Form from './form'

const headers = <>
    <th start>leadManagementLeadSource</th>
    <th>leadManagementCode</th>
</>

const row = item => <>
    <td>{item.title}</td>
    <td>{item.code}</td>
</>

export default <List
    create={Form}
    filters={<Title />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
