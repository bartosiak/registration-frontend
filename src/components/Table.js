import "./Table.css";

export const Table = ({ events, deleteEvent, ...rest }) => {
    return (
        <table {...rest}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Imię i Nazwisko</th>
                    <th>Wydarzenie</th>
                    <th>Miast</th>
                    <th>Akcje</th>
                </tr>
            </thead>
            <tbody>
                {events.map((row, index) => {
                    return (
                        <tr key={row._id}>
                            <td>{index + 1}</td>
                            <td>{row.name}</td>
                            <td eventkey={row.event.key}>{row.event.val}</td>
                            <td eventkey={row.city.key}>{row.city.val}</td>
                            <td>
                                <button
                                    onClick={() => {
                                        deleteEvent(row._id);
                                    }}
                                    className="delete"
                                >
                                    Usuń
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
