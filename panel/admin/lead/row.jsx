import { DateTime } from 'list'

export default item => <>
    <td>{item.title}</td>
    <td>{item.number}</td>
    <td>{item.contact?.title}</td>
    <td>{item.assignedPerson?.title}</td>
    <DateTime value={item.nextFollowUpDate} />
    <td>{item.leadStatus}</td>
</>
