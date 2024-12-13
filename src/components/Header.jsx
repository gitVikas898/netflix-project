import { LOGO_URL } from "../utils/constants"

const Header = () => {
  return (
    <div className="left-32 absolute bg-gradient-to-b from-black">
        <img src={LOGO_URL} alt="netflix-logo" className="max-w-52"/>
    </div>
  )
}
export default Header