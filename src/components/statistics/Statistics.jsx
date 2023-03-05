import statCSS from './Statistics.module.css';
import { getRandomColor } from '../functions/randomColor';
// import PropTypes from 'prop-types';
export const Statistics = ({ title, stats }) => {
    return <section className={statCSS.statistics}> <h2>{title}</h2> <ul className={statCSS.statList}>
        {stats.map(({ label, percentage, id }) => {
            return <li className="item" style={{ backgroundColor: getRandomColor() }} key={id}>
                <span className="label">{label}</span>
                <span className="percentage">{percentage}%</span>
            </li>
        })}
    </ul></section >
}