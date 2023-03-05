import transCss from './TransactionHistory.module.css'
export const TransactionHistory = ({ items }) => {
    return <> <table className={transCss.transactionHistory}>
        <thead>
            <tr>
                <th className={transCss.head}>Type</th>
                <th className={transCss.head}>Amount</th>
                <th className={transCss.head}>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map((item) => {
                return <tr className={transCss.body} key={item.id}>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>
            })}

        </tbody>
    </table>
    </>
}

