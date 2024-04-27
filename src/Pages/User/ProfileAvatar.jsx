import PropTypes from 'prop-types';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

export function ProfileAvatar(props) {
    return (
        <Avatar>
            <AvatarImage src={props.src} alt="profile picture" />
            <AvatarFallback>A</AvatarFallback>
        </Avatar>
    )
}

ProfileAvatar.propTypes = {
    src: PropTypes.string.isRequired,
}
  