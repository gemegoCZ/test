import './Page.css';


function Falling_star({children}) {
    return (

        <div className='page'>
            <div className="left">
                <div className="leftMid">
                    <div className="leftLink">
                        Odkaz1
                    </div>
                    <div className="leftLink">
                        Odkaz2
                    </div>
                    <div className="leftLink">
                        Odkaz3
                    </div>
                    <div className="leftLink">
                        Odkaz4
                    </div>
                    <div className="leftLink">
                        Odkaz5
                    </div>
                </div>
            </div>

            <div className="right">
                <div className="rightMid">
                    Page1
                </div>
            </div>
        </div>

    )
}

export default Falling_star;