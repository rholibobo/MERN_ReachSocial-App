import {Box} from "@mui/material"

const UserImage = ({image, size = "60px"}) => {
  return (
    <Box width={size} height={size}>
        <img 
            style={{backgroundSize: "contain", backgroundPosition: "center", borderRadius: "50%"}}
            height={size}
            alt= "user"
            src={`http://localhost:3001/assets/${image}`}
        />
    </Box>
  )
}

export default UserImage;