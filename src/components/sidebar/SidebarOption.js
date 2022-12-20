import "./sidebarOption.css"

export const SidebarOption = (props) => {
    const { text, Icon } = props
    return (
        <div className="sidebarOption">
            <Icon />
            <h2>{text}</h2>
        </div>
    )
}
