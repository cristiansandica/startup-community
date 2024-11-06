import { formatDate } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { EyeIcon } from 'lucide-react'
import Image from "next/image";

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
    const { createdAt, views, author: { id: authorId, name }, title, category, id, image, description } = post
    return (
        <li className='startup-card group'>
            <div className='flex-between'>
                <p className='startup_card_date'>
                    {formatDate(createdAt)}
                </p>
                <div className='flex gap-1.5'>
                    <EyeIcon className="size-6 text-primary" />
                    <span>{views}</span>
                </div>
            </div>
            <div className='flex-between mt-5 gap-5'>
                <div className='flex-1'>
                    <Link href={`/user/${authorId}`}>
                        <p className='text-16-medium line-clamp-1'>
                            {name}
                        </p>
                    </Link>
                    <Link href={`/startup/${id}`}>
                        <h3 className='text-26-semibold'>
                            {title}
                        </h3>
                    </Link>


                </div>
                <Link href={`/user/${authorId}`}>
                    <Image src="https://placehold.co/40x40" alt="placeholder" width={48} height={48} className="rounded-full" />
                </Link>

            </div>
            <Link href={`/startup/${id}`}>
                <p className='startup-card_desc'>
                    {description}
                </p>

                 <img src={image} alt="placeholder" className="startup-card_img" />
            
            </Link>
        </li>
    )
}

export default StartupCard