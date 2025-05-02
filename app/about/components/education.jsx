import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Me4 from "@/public/image/me4.jpeg";

function Wrapper({ children }) {
	return (
		<div className="mx-auto container gap-10 p-10 grid grid-cols-1  my-10 ">
			<motion.div
				className="flex justify-center items-start flex-col mb-5 "
				initial={{
					opacity: 0,
					x: -200,
				}}
				whileInView={{
					opacity: 1,
					x: 0,
				}}
				transition={{
					delay: 0.5,

					type: "spring",
				}}>
				{children}
			</motion.div>
		</div>
	);
}

export default function Education() {
	return (
		<Wrapper>
			<section className="grid gap-8 md:gap-12">
				<div className="text-center space-y-2">
					<h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
						Образование
					</h1>
					<p className="text-muted-foreground max-w-[800px] mx-auto">
						Узнайте больше о моем образовании.
					</p>
				</div>
				<div className="grid gap-8 md:gap-12">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="px-5">
							<div className="font-medium text-lg">
								2020 - 2023
							</div>
							<div>
								<h2 className="font-semibold text-xl">
									Алматинский гуманитарно - экономический университет
								</h2>
								<h3 className="text-md font-normal mb-3">
									Информационные системы
								</h3>
								<div className="gap-4 mb-4 flex items-stretch md:h-[300px] xl:h-[400px]">
									<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
										<Image
											src={Me4}
											width={400}
											height={225}
											alt="University"
											className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
										/>
									</div>
									<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
										<Image
											src={Me4}
											width={400}
											height={225}
											alt="University"
											className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
										/>
									</div>
									<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
										<Image
											src={Me4}
											width={400}
											height={225}
											alt="University"
											className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
										/>
									</div>
								</div>
								<div className="flex items-center gap-2">
									<p className="text-justify">
										Получил полезные знания в области информационных систем.
										Помогло многое использовать в своей работе.
									</p>
								</div>
								{/* add gpa in a style */}
								<div className="flex flex-wrap gap-2 mt-4 text-sm">
									<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
										Средний балл: 4.3
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col justify-start px-5 md:px-0">
							<h2 className="font-semibold text-xl mt-7">
								Достижения
							</h2>
							<p className="text-md font-normal mb-3 md:mb-12">
								Некоторые из моих достижений за время учебы.
							</p>
							<div className="flex items-center gap-4 mb-4">
								<div className="aspect-square w-10 rounded-full bg-black flex items-center justify-center text-primary-foreground">
									<FontAwesomeIcon
										icon={faMedal}
										className="text-white h-5 w-5"
									/>
								</div>
								<div>
									<h3 className="font-medium">
										Лучший скрипт на MsSQL
									</h3>
									<p className="text-sm">
										ALmaty
										2022s
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Wrapper>
	);
}
