import Chip from '@mui/material/Chip';
const ChipSet = ({title,comp=null,avatar=null})=>{
    if(comp == null){
  return <Chip label={title} avatar={avatar} variant="outlined"  sx={{  color: 'white' }}/>
    }
    return <Chip label={title} icon={comp} variant="outlined"  sx={{  color: 'white' }}/>
}
export default ChipSet
