"use client"

import { cn } from '@/lib/utils';
import Dropzone from 'react-dropzone'

const DropZone = () => {
    const maxsize = 20971520;

  return (
    <div>
        <Dropzone minSize={0} maxSize={maxsize} onDrop={acceptedFiles => console.log(acceptedFiles)}>
  {({getRootProps, getInputProps,isDragActive,isDragReject,fileRejections,}) => {

    const isFileTooLarge = fileRejections.length >0 && fileRejections[0].file.size > maxsize

    return(
    <section className='m-4'>
      <div {...getRootProps()}
        className={cn("w-full h-52 flex justify-center items-center p-5 border border-dashed rounded-lg text-center"
        ,isDragActive ? "bg-[#035ffe] text-white animate-pulse":"bg-slate-100/50 dark:bg-slate-800/80 text-slate-400 dark:text-white"
        )}
      >

        <input {...getInputProps()} />
        {!isDragActive && "Click Here or Drop a File to be Uploaded"}
        {isDragActive && !isDragReject && "Drop Here to Upload the File"}
        {isFileTooLarge && (
            <div className='text-danger mt-3'>File Exceeds the Storage Limit , Reduce the Size</div>
        )}
      </div>
    </section>
  )}}
</Dropzone>
    </div>
  )
}

export default DropZone