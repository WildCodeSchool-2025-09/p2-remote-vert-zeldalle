import EffectButtons from "./EffectButtons";
import HeartSelector from "./HeartSelector";
import TypeButtons from "./TypeButtons";
import "./Panel.css";

type FilterKey = "cold" | "stamina" | "heat" | "mighty" | "sneaky" | "climbing";
type TypeKey =
	| "meats"
	| "fruitsvegetables"
	| "minerals"
	| "insects"
	| "fishs"
	| "monsters";

type PanelProps = {
	onHeartsChange: (value: number) => void;
	onFiltersChange: (filters: Record<FilterKey, boolean>) => void;
	onTypesChange: (types: Record<TypeKey, boolean>) => void;
};

function Panel({ onHeartsChange, onFiltersChange, onTypesChange }: PanelProps) {
	return (
		<div className="Panel">
			<HeartSelector onChange={onHeartsChange} />
			<EffectButtons onFiltersChange={onFiltersChange} />
			<TypeButtons onTypesChange={onTypesChange} />
		</div>
	);
}

export default Panel;
