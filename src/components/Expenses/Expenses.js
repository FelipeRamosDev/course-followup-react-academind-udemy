import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

export default function Expenses({ expenses }) {
    return (
        <Card className="expenses">
            {expenses.map(item => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />)}
        </Card>
    );
}