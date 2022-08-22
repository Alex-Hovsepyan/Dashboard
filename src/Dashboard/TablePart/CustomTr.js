import CustomMembers from "../../Custom/CustomMembers/CustomMembers"

function CustomTr ({ src, companies, images, budget, completion }) {
    return (
        <tr>
            <td><img src={src} alt="icon" />{companies}</td>
            <td><CustomMembers images={images} /></td>
            <td>{budget}</td>
            <td>{completion}</td>
        </tr>
    );
}

export default CustomTr;
