import { useState } from "react";
import "./HeartSelector.css";

type HeartSelectorProps = {
	max?: number;
	onChange?: (value: number) => void;
};

export default function HeartSelector({
	max = 12,
	onChange,
}: HeartSelectorProps) {
	const [selectedHearts, setSelectedHearts] = useState<number>(0);

	const handleClick = (index: number, fraction: number) => {
		const value = index + fraction;
		setSelectedHearts(value);
		onChange?.(value);
	};

	const getHeartLevel = (i: number): JSX.Element => {
		const diff = selectedHearts - i;

		if (diff >= 1)
			return (
				<img
					src="/public/heartsimg/Fullheart.png"
					alt="full"
					className="heart-image"
				/>
			);
		if (diff >= 0.75)
			return (
				<img
					src="/public/heartsimg/Threequarterheart.png"
					alt="three-quarters"
					className="heart-image"
				/>
			);
		if (diff >= 0.5)
			return (
				<img
					src="/public/heartsimg/Halfheart.png"
					alt="half"
					className="heart-image"
				/>
			);
		if (diff >= 0.25)
			return (
				<img
					src="/public/heartsimg/Onequarterheart.png"
					alt="quarter"
					className="heart-image"
				/>
			);

		return (
			<img
				src="/public/heartsimg/Emptyheart.png"
				alt="empty"
				className="heart-image"
			/>
		);
	};

	const fractions: number[] = [0.25, 0.5, 0.75, 1];

	return (
		<div className="heart-bar">
			{[...Array(max)].map((_, i) => (
				<div key={`heart-${i}-fraction-${fractions}`} className="heart-wrapper">
					{fractions.map((fraction) => (
						<div
							key={`heart-${i}-fraction-${fraction}`}
							role="button"
							tabIndex={0}
							className={`heart-click-zone zone-${fraction * 100}`}
							onClick={() => handleClick(i, fraction)}
							onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
								if (e.key === "Enter" || e.key === " ") {
									handleClick(i, fraction);
								}
							}}
						/>
					))}
					{getHeartLevel(i)}
				</div>
			))}
		</div>
	);
}
