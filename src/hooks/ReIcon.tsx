import * as RemixIcons from 'react-icons/ri';

type ReIconProps = {
   className?: string,
   name?: string,
   size?: number,
}

const ReIcon = ({name, size = 24, className}: ReIconProps) => {
   const Icon = name ? RemixIcons[name as keyof typeof RemixIcons] : null;

   if (!Icon) return null;

   return (
      <Icon size={size} className={`text-black ${className}`}/>
   );
};

export default ReIcon;