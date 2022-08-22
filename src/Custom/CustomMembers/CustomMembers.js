import s from "./CustomMembers.module.scss";
import MemberImage from "./MemberImage";

function CustomMembers ({ images }) {
    return (
        <div className={s.membersContainer}>
            {images.map(src => <MemberImage src={src} />)}
        </div>
    );
}

export default CustomMembers;