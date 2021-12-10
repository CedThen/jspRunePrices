import BerPng from '../assets/ber.png'
import ChamPng from '../assets/cham.png'
import GulPng from '../assets/gul.png'
import IstPng from '../assets/ist.png'
import JahPng from '../assets/jah.png'
import LemPng from '../assets/lem.png'
import LoPng from '../assets/lo.png'
import MalPng from '../assets/mal.png'
import OhmPng from '../assets/ohm.png'
import PulPng from '../assets/pul.png'
import SurPng from '../assets/sur.png'
import UmPng from '../assets/um.png'
import VexPng from '../assets/vex.png'
import ZodPng from '../assets/zod.png'
import { Image } from '@chakra-ui/react'

const RuneImage = (props) => <Image w="32px" objectFit="contain" paddingRight="3" {...props} />

const RunePngs = (rune) => {
  const runesMap = {
    lem: <RuneImage src={LemPng} alt="lem" />,
    pul: <RuneImage src={PulPng} alt="pul" />,
    um: <RuneImage src={UmPng} alt="um" />,
    mal: <RuneImage src={MalPng} alt="mal" />,
    ist: <RuneImage src={IstPng} alt="ist" />,
    gul: <RuneImage src={GulPng} alt="gul" />,
    vex: <RuneImage src={VexPng} alt="vex" />,
    ohm: <RuneImage src={OhmPng} alt="ohm" />,
    lo: <RuneImage src={LoPng} alt="lo" />,
    sur: <RuneImage src={SurPng} alt="sur" />,
    ber: <RuneImage src={BerPng} alt="ber" />,
    jah: <RuneImage src={JahPng} alt="jah" />,
    cham: <RuneImage src={ChamPng} alt="cham" />,
    zod: <RuneImage src={ZodPng} alt="zod" />,
  }
  return runesMap[rune]
}

export default RunePngs