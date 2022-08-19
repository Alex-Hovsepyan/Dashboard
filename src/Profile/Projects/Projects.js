import './Projects.scss';
import Button from '../../Custom/CustomButton/CustomButton'
import Profile1 from '../../assets/images/profile-2.png';
import Profile2 from '../../assets/images/profile-1.png';
import Profile3 from '../../assets/images/profile-3.png';
import Avatar1 from '../../assets/images/avatar1.png';
import Avatar2 from '../../assets/images/avatar2.png';
import Avatar3 from '../../assets/images/avatar3.png';
import Avatar4 from '../../assets/images/avatar4.png';
import Images from './Images';
import { Link } from "react-router-dom";






function Projects() {

            // ARRAY

    const cards = [
        {
            src : Profile2,
            number : '2',
            title : 'Modern',
            text : 'As Uber works through a huge amount of internal management turmoil.',
            avatar1 : Avatar1,
            avatar2 : Avatar2,
            avatar3 : Avatar3,
            avatar4 : Avatar4
        },

        {
            src : Profile1,
            number : '1',
            title : 'Scandinavian',
            text : 'Music is something that every person has his or her own specific opinion about.',
            avatar1 : Avatar3,
            avatar2 : Avatar4,
            avatar3 : Avatar1,
            avatar4 : Avatar2
        },

        {
            src : Profile3,
            number : '3',
            title : 'Minimalist',
            text : 'Different people have different taste, and various types of music.',
            avatar1 : Avatar4,
            avatar2 : Avatar3,
            avatar3 : Avatar2,
            avatar4 : Avatar1
        }
    ]


    // URISH COMPONENT

    function ProjectCard({src, number, text, title, av1, av2, av3, av4}) {
        return (
            <div style={{height : 432}}>
                <img src={src} />
                <div className='ContentBox'>
                <p>Project #{number}</p>
                <Link className='link' to={'/dashboard'}>
                <h4 className='h4'>{title}</h4>
                </Link>
                <h6>{text}</h6>
                <div className='CardLastContent'>
                    <Link to={'/dashboard'}>

                    <Button border={'solid 1px white'} value={'VIEW ALL'} width={122} background={'transparent'} />
                    </Link>
                    <div className='images'>
                        <Images Ava1={av1} Ava2={av2} Ava3={av3} Ava4={av4} />
                    </div>
                </div>
                </div>
            </div>
        )
    }
    
        // ISKAKAN COMPONENT + MAP METHOD

    return (
        <div className="ProjectContainer">
            <header>
            <h4>Projects</h4>
            <h6>Architects design houses</h6>
            </header>
            <div className='ProjectContents'>
                {cards.map(item => <ProjectCard 
                     src={item.src} 
                     number={item.number}
                     title={item.title}
                     text={item.text}
                     av1={item.avatar1}
                     av2={item.avatar2}
                     av3={item.avatar3}
                     av4={item.avatar4}
                     />
                     )}

            </div>
        </div>
    )
}

export default Projects;