import Link from "next/link";

export const FirstSection = () => {
  return (
    <div className="p-4">
      <h1 className="mb-[10px] text-center text-2xl">This is first section kamrul</h1>

      <p className="mb-4">
        London is the capital city of the United Kingdom and one of the most
        vibrant, diverse, and historic cities in the world. Located on the River
        Thames, it is known for its iconic landmarks such as Big Ben, the London
        Eye, Tower Bridge, Buckingham Palace, and the British Museum. London
        blends centuries of history with modern culture, offering world-class
        art, theatre, fashion, and cuisine. It's also a global financial hub and
        home to over 9 million people, representing hundreds of nationalities
        and languages.
      </p>

      <div className="flex justify-end">
       <Link
  href="/moreinfo"
  className="text-xs inline-block px-2 py-1 bg-blue-300 text-black rounded-lg hover:bg-blue-700 transition duration-300"
>
  More info
</Link>
      </div>
    </div>
  );
};
