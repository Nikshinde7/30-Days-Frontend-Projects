import Image from "next/image";
import { Separator } from "./components/Separator";

export default function Page() {
    return (
        <div className="flex w-full h-full min-h-screen justify-center items-center bg-stone-100 font-outfit">
            <div className="bg-white p-5 rounded-lg flex flex-col gap-3 w-[351px]">
                {/* Top Image */}
                <Image src="/assets/image-omelette.jpeg" alt="img" width={311} height={142} className="rounded-lg" />

                <div className="text-xl text-black font-thin font-youngSerif -mb-1">
                    Simple Omelette Recipe
                </div>
                <div className="text-[7.5px] text-stone-900">
                    An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
                </div>

                <div className="bg-rose-50 flex flex-col p-3">
                    <div className="text-rose-800 text-[10px] font-semibold mb-2">
                        Preparation time
                    </div>
                    <ul className="list-disc flex flex-col gap-1 mx-3.5 text-[7.5px]">
                        <li className="text-brown-800 text-[7px]">
                            <div className="flex">
                                <div className="font-semibold">Total: &nbsp;</div>
                                <div>Approximately 10 minutes</div>
                            </div>
                        </li>
                        <li className="text-brown-800 text-[7px]">
                            <div className="flex">
                                <div className="font-semibold">Preparation: &nbsp;</div>
                                <div>5 minutes</div>
                            </div>
                        </li>
                        <li className="text-brown-800 text-[7px]">
                            <div className="flex">
                                <div className="font-semibold">Cooking: &nbsp;</div>
                                <div>5 minutes</div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col">
                    <div className="text-brown-800 font-youngSerif mb-2 text-sm">
                        Ingredients
                    </div>
                    <ul className="list-disc flex flex-col gap-1 mx-5 text-[7.5px]">
                        <li className="text-brown-800 text-[7px] pl-1">
                            <div>2-3 large eggs</div>
                        </li>
                        <li className="text-brown-800 text-[7px] pl-1">
                            <div>Salt, to taste</div>
                        </li>
                        <li className="text-brown-800 text-[7px] pl-1">
                            <div>Pepper, to taste</div>
                        </li>
                        <li className="text-brown-800 text-[7px] pl-1">
                            <div>1 tablespoon of butter or oil</div>
                        </li>
                        <li className="text-brown-800 text-[7px] pl-1">
                            <div>Optional fillings: cheese, diced vegetables, cooked meats, herbs</div>
                        </li>
                    </ul>
                </div>

                <Separator />

                <div className="flex flex-col">
                    <div className="text-brown-800 font-youngSerif mb-2 text-sm">
                        Instructions
                    </div>
                    <ul className="list-decimal flex flex-col gap-1 mx-3.5 text-[7.5px]">
                        <li className="text-brown-800 text-[7px] pl-2">
                            <span className="font-bold text-[#64615f]"> Beat the eggs: &nbsp;</span>
                            In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.
                            You can add a tablespoon of water or milk for a fluffier texture.
                        </li>
                        <li className="text-brown-800 text-[7px] pl-2">
                            <span className="font-bold text-[#64615f]">Heat the pan: &nbsp;</span>
                            Place a non-stick frying pan over medium heat and add butter or oil.
                        </li>
                        <li className="text-brown-800 text-[7px] pl-2">
                            <span className="font-bold text-[#64615f]">Cook the omelette: &nbsp;</span>
                            Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
                        </li>
                        <li className="text-brown-800 text-[7px] pl-2">
                            <span className="font-bold text-[#64615f]">Add fillings (optional): &nbsp;</span>
                            When the eggs begin to set at the edges but are still slightly runny in the
                            middle, sprinkle your chosen fillings over one half of the omelette.
                        </li>
                        <li className="text-brown-800 text-[7px] pl-2">
                            <span className="font-bold text-[#64615f]">Fold and serve: &nbsp;</span>
                            As the omelette continues to cook, carefully lift one edge and fold it over the
                            fillings. Let it cook for another minute, then slide it onto a plate.
                        </li>
                        <li className="text-brown-800 text-[7px] pl-2">
                            <span className="font-bold text-[#64615f]">Enjoy: &nbsp;</span>
                            Serve hot, with additional salt and pepper if needed.
                        </li>
                    </ul>
                </div>

                <Separator />

                <div className="flex flex-col">
                    <div className="text-brown-800 font-youngSerif mb-2 text-sm">
                        Nutrition
                    </div>
                    <div className="text-[8px] text-stone-900">
                        The table below shows nutritional values per serving without the additional fillings.
                    </div>
                    <table className="table-auto p-2 text-[7px] w-full mt-2">
                        <tbody>
                            <tr className="border-b border-b-slate-100 h-4">
                                <td className="pl-3 text-black">Calories</td>
                                <td className="font-extrabold text-[#804331]">277kcal</td>
                            </tr>
                            <tr className=" h-6 border-b border-b-slate-100 ">
                                <td className="pl-3 text-black">Carbs</td>
                                <td className="font-extrabold text-[#804331]">0g</td>
                            </tr>
                            <tr className=" h-6 border-b border-b-slate-100 ">
                                <td className="pl-3 text-black">Protein</td>
                                <td className="font-extrabold text-[#804331]">20g</td>
                            </tr>
                            <tr className=" h-6  border-b-slate-100 ">
                                <td className="pl-3 text-black">Fat</td>
                                <td className="font-extrabold text-[#804331]">22g</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}