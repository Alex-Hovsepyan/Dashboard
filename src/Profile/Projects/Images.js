function Images({Ava1, Ava2, Ava3, Ava4}) {
        return (
            <ul>
                <img src={Ava1} className="FirstAvatar" />
                <img src={Ava2} className="SecondAvatar" />
                <img src={Ava3} className="ThirdAvatar" />
                <img src={Ava4} className="FourthAvatar" />
            </ul>
        )
}

export default Images