
import { styled } from "@mui/material/styles";


const SideBarCustom = styled("div")(({ theme }) => ({
 "&.wrap-sidebar-sigup": {
   backgroundColor: theme.palette.grey[500],
 }
}));

export default SideBarCustom
