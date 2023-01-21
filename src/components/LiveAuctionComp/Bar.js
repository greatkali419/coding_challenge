import arrow from "../../images/liveArrow.svg";

const Bar = () => {
  return (
    <div className="pc-live-auction-bar">
      <h2>
      See upcoming drops
      </h2>
      <button>
        <img src={arrow} alt="arrow" />
      </button>
    </div>
  )
}

export default Bar