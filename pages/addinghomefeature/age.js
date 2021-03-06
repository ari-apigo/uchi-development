import Button from 'react-bootstrap/Button'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout, {AddHFFooter} from '../../components/layout.js'
import {AddHFHeader} from '../../components/headers.js'
import {Slider} from '../../components/slider.js'

import styles from '../../components/details.module.css'
import addingStyles from '../../components/addingHomeFeature.module.css'
import btnStyles from '../../components/button.module.css'

const addHF = "Roof";
const addHFiconpath = "/icons/hf_" + addHF.toLowerCase() + "_lg.svg";
const additionalRefrigerator = true;
const additionalRoof = false;

export default function Age() {
  const router = useRouter();

  var next = "/addinghomefeature/";
  if (addHF == "Roof") {
    next = next + "confirmation";
  } else {
    next = next + "additional"
  }

  return (
    <div className={styles.chocolate60bg}>
      <Head>
        <title>UCHI | Add a Home Feature</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <div className={styles.chocolate60bg}>
          <div className={styles.detailsContainer}>
            <div className="pageContent">
              <AddHFHeader name={addHF} iconpath={addHFiconpath} />
            </div>
          </div>
          <div className="pageContent">
            <div className={styles.detailsContainerDesktop}>
              <img className="btn-back" src="../icons/carrotbtn_left_line.svg" alt="Back" onClick={() => router.back()} />
              <div className={styles.addHFHeaderDesktop}>
                <img className={styles.addHFHeaderDesktopIcon} src={addHFiconpath} alt={addHF} />
                <h1>Add a {addHF}</h1>
              </div>
            </div>
            <div className={addingStyles.prompt}>
              <h2 className="textDark">How old is your {addHF}?</h2>
              <p className="smallHeader textDark">Average Lifespan: 20-30 years</p>
            </div>
            <Slider max={60} />
            <div className="addhfprocessbtn-container">
              <Button className={btnStyles.cancelDesktop} onClick={() => router.push("/homefeatures")}>
                <span className="iconFirst">
                  <img src="../icons/close_line_dark.svg" alt="Cancel" />
                </span>
                Cancel
              </Button>
              <Button className={btnStyles.addDesktop} onClick={() => router.push(next)}>
                <span className="iconFirst">
                  <img src="../icons/carrotbtn_right_line_dark.svg" alt="Next" />
                </span>
                Next
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.chocolate60filler}>
        </div>
        <AddHFFooter cancel="/homefeatures" next={next} />
      </Layout>
    </div>
  )
}
