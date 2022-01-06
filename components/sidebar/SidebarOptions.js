export const SidebarOptions = ({text , Icon , active}) => {
    return (
        <div className={`text-[#d9d9d9] flex items-center opacity-80 justify-center xl:justify-start text-xl space-x-2 hoverAnimationC ${active && 'font-bold opacity-100'}`}>
            <Icon className="h-7 "/>
            <span className="hidden xl:block">{text}</span> 
        </div>
    )
}
