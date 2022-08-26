import s from "./CustomMembers.module.scss";
import MemberImage from "./MemberImage";

function CustomMembers ({ images }) {
    return (
        <div className={s.container}>
            <div className={s.membersContainer}>
                {images.map((src, idx) => <MemberImage src={src} key={idx} />)}
            </div>
        </div>
    );
}

export default CustomMembers;