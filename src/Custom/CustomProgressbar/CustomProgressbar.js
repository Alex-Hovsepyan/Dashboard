import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function CustomProgressbar({ percentage }) {
    return(
        <div>
            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                    pathColor: `rgb(94, 207, 25)`,
                    textColor: '#fff',
                    trailColor: 'transparent',
                  })} />
        </div>
    )
}

export default CustomProgressbar;