import { Button } from "@mui/material"
 

export const CustomButton =({text, children})=>{
    return  <Button type="submit" variant="contained" fullWidth>
    {text}{children}
  </Button>
}