import React from 'react'

export interface PermissionDeniedProps {
  url: string | null;
  // Add other props if needed
}
 
export default function PermissionDenied(props: PermissionDeniedProps) {
    const { url } = props
    console.log("url Permission", url);
    
    if(url){
        window.location.href = url
    }
  return (
    <>
            {
                url == null && (
                    <div>
                        PermissionDenied
                    </div>
                )
            }
        </>
  )
}
