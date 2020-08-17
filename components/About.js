// read up on font loading

const About = () => {
  return(
    <div className='about-box'>
      <div className='banner-col'>
        <p id='opener'>
        “Damn, that’s a fresh burst!”, said the stoner to the carton of freshly chilled juice –
        </p>
      </div>
      <div className='banner-col'>
        <p>
        And no doubt it was – there’s nothing quite like a zesty hit of fruit to the sticky lips of a dry mouth;
        no other sensation quite like it, besides a fresh burst of inspiration to a stagnant mind…
        </p>
      </div>
      <div className='banner-col'>
        <p>
        And rightly, we thought – just like the varieties of fresh and fruity flavours found the world over,
        inspiration is available to us in many eccentric forms; in oddities and loose ends, that come together,
        out of nowhere, to create something great, and often, unexpected.
        </p>
      </div>
      <div className='banner-col'>
        <p>
        This is a place of loose ends. A place of serendipity. A place of delightfully fresh and fruity ideas,
        for the eyes, ears and mind… Sink your teeth into them and see what bursts forth –'
        </p>
      </div>

      <style jsx>{`
        .about-box {
          display: flex;
          flex-flow: row wrap;
          justify-content: space-around;
          margin-top: 0px;
          width: 90%;
        }

        .banner-col {
          float: left;
          width: 20%;
          font-size: 18px;
          padding-right: 3%;
        }

        #opener {
          font-size: 24px;
          font-weight: 500;
        }

        .banner-col p {
          // font-family: "aglet-slab"; // global
          letter-spacing: 0.03em;
          line-height: 1.9em;
          color: #212121;
          margin-top: 10px;
          opacity: 0.85;
          font-size: 15px;
          font-weight: 100;
        }
      `}</style>
    </div>
  )
}

export default About;
