import Chip from '@mui/material/Chip';
const ChipSet = ({title,comp=null,avatar=null,tool=false})=>{
    if(comp == null){
  return <Chip data-aos="fade-right" label={title} avatar={avatar} variant="outlined"  sx={{  color: 'white' }}/>
    }
    return <Chip data-aos={`${!tool ? 'fade-right' : ''}`}  label={title} icon={comp} variant="outlined"  sx={{  color: 'white' }}/>
}
export default ChipSet
