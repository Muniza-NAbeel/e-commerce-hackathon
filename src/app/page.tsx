import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';

export default function Home() {
  return (
    <div className='bg-[#f6f7f9]  min-h-screen p-4 sm:p-6 lg:p-20 flex flex-col gap-10 font-'>
  
      </section> */}
      <div className="first w-full flex flex-wrap sm:flex-nowrap gap-4 sm:gap-8 justify-center">
          {/* Left Card */}
          <div
            className="bg-blue-100 p-6 rounded-lg shadow-md w-[640px]"
            style={{
              backgroundImage: 'url("/bl.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
             <h2 className="text-white text-2xl mb-4 font-[600] text-[32px] leading-[48px] tracking-[-3%]">
          The Best Platform <br />
          for Car Rental
        </h2>
        <p className="font-[500] text-white text-[16px] leading-[24px] tracking-[-2%]">
          Ease of doing a car rental safely and <br /> reliably, of course at a
          low price.
        </p>
        <button className="mt-4 bg-[#3563E9] text-white w-[140px] h-[44px] rounded-[4px] px-[20px] gap-[8px] hover:bg-[#54A6FF] active:bg-[#3563e9] active:scale-95 transition-all shadow-md">
          Rental Car
        </button>
            <Image
              src="/hero1.png"
              alt="Car"
              height={600}
              width={600}
              className="mt-4 w-full max-w-[440px] mx-auto object-cover"
            />
          </div>

          {/* Right Card */}
          <div
            className="bg-blue-200 p-6 rounded-lg shadow-md w-[640px]"
            style={{
              backgroundImage: 'url("/br.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h2 className="font-[600] text-[#FFFFFF] text-[32px] leading-[48px] tracking-[-3%] mb-4">
          Easy way to rent a <br /> car at a low price
        </h2>
        <p className="font-[500] text-[16px] text-[#FFFFFF] leading-[24px] tracking-[-2%]">
          Providing cheap car rental services <br /> and safe and comfortable
          facilities.
        </p>
        <button className="mt-4 bg-[#54A6FF] text-white w-[140px] h-[44px] rounded-[4px] px-[20px] gap-[8px] hover:bg-[#3563e9] active:bg-[#54A6FF] active:scale-95 transition-all shadow-md">
          Rental Car
        </button>
            <Image
              src="/hero2.png"
              alt="Car"
              height={500}
              width={500}
              className="mt-4 w-full max-w-[340px] mx-auto object-cover"
            />
          </div>
        </div>

      <section className='w-full flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-4 sm:gap-8'>
        <Image
          src={"/Pick - Up.png"}
          alt=''
          width={582}
          height={132}
          className='max-w-full'
        />
        <Image
          src={"/Switch.png"}
          alt=''
          width={64}
          height={64}
          className='max-w-full sm:w-[100px]'
        />
        <Image
          src={"/Drop - Off.png"}
          alt=''
          width={582}
          height={132}
          className='max-w-full'
        />
      </section>

      <section className='popular w-full flex flex-col gap-4'>
        <div className='first w-full flex items-center justify-between'>
          <h1 className='text-gray-500 text-lg sm:text-xl'>Popular Car</h1>
          <Link href={"/categories"}>
            <h1 className='text-[#3563e9] font-bold hover:underline decoration-[#3563e9]'>
              View All
            </h1>
          </Link>
        </div>
        <div className='sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          <Card className='w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between'>
            <CardHeader>
              <CardTitle className='w-full flex items-center justify-between'>
                Koenigsegg{" "}
                <Image src={"/heart.png"} alt='' width={20} height={20} />
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className='w-full flex flex-col items-center justify-center gap-4'>
              <Image src={"/car.png"} alt='' width={220} height={68} />
              <Image
                src={"/Spesification.png"}
                alt=''
                width={256}
                height={24}
              />
            </CardContent>
            <CardFooter className='w-full flex items-center justify-between'>
              <p>
                $99.00/<span className='text-gray-500'>day</span>
              </p>
              <button className='bg-[#3563e9] p-2 text-white rounded-md hover:bg-[#54A6FF] active:bg-[#3563e9] active:scale-95 transition-all shadow-md'>
                Rent Now
              </button>
            </CardFooter>
          </Card>

          <Card className='w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between'>
            <CardHeader>
              <CardTitle className='w-full flex items-center justify-between'>
                NissanGT - R{" "}
                <Image src={"/heart 2.png"} alt='' width={20} height={20} />
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className='w-full flex flex-col items-center justify-center gap-4'>
              <Image src={"/car (1).png"} alt='' width={220} height={68} />
              <Image
                src={"/Spesification.png"}
                alt=''
                width={256}
                height={24}
              />
            </CardContent>
            <CardFooter className='w-full flex items-center justify-between'>
              <p>
                $99.00/<span className='text-gray-500'>day</span>
              </p>
              <Link href={"/payment"}>
                <button className='bg-[#3563e9] p-2 text-white rounded-md hover:bg-[#54A6FF] active:bg-[#3563e9] active:scale-95 transition-all shadow-md'>
                  Rent Now
                </button>
              </Link>
            </CardFooter>
          </Card>

          <Card className='w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between'>
            <CardHeader>
              <CardTitle className='w-full flex items-center justify-between'>
                Rolls-Royce{" "}
                <Image src={"/heart.png"} alt='' width={20} height={20} />
              </CardTitle>
              <CardDescription>Sedan</CardDescription>
            </CardHeader>
            <CardContent className='w-full flex flex-col items-center justify-center gap-4'>
              <Image src={"/car.png"} alt='' width={220} height={68} />
              <Image
                src={"/Spesification.png"}
                alt=''
                width={256}
                height={24}
              />
            </CardContent>
            <CardFooter className='w-full flex items-center justify-between'>
              <p>
                $99.00/<span className='text-gray-500'>day</span>
              </p>
              <button className='bg-[#3563e9] p-2 text-white rounded-md hover:bg-[#54A6FF] active:bg-[#3563e9] active:scale-95 transition-all shadow-md'>
                Rent Now
              </button>
            </CardFooter>
          </Card>

          <Card className='w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between'>
            <CardHeader>
              <CardTitle className='w-full flex items-center justify-between'>
                NissanGT - R{" "}
                <Image src={"/heart 2.png"} alt='' width={20} height={20} />
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className='w-full flex flex-col items-center justify-center gap-4'>
              <Image src={"/car (1).png"} alt='' width={220} height={68} />
              <Image
                src={"/Spesification.png"}
                alt=''
                width={256}
                height={24}
              />
            </CardContent>
            <CardFooter className='w-full flex items-center justify-between'>
              <p>
                $99.00/<span className='text-gray-500'>day</span>
              </p>
              <button className='bg-[#3563e9] p-2 text-white rounded-md hover:bg-[#54A6FF] active:bg-[#3563e9] active:scale-95 transition-all shadow-md'>
                Rent Now
              </button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className='popular w-full flex flex-col gap-4'>
        <h1 className='text-gray-500 text-lg sm:text-xl'>Recommendation Car</h1>
        <div className='sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          <Card className='w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between'>
            <CardHeader>
              <CardTitle className='w-full flex items-center justify-between'>
                All New Rush{" "}
                <Image src={"/heart.png"} alt='' width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className='w-full flex flex-col items-center justify-center gap-4'>
              <Image src={"/suv.png"} alt='' width={220} height={68} />
              <Image
                src={"/Spesification.png"}
                alt=''
                width={256}
                height={24}
              />
            </CardContent>
            <CardFooter className='w-full flex items-center justify-between'>
              <p>
                $99.00/<span className='text-gray-500'>day</span>
              </p>
              <button className='bg-[#3563e9] p-2 text-white rounded-md hover:bg-[#54A6FF] active:bg-[#3563e9] active:scale-95 transition-all shadow-md'>
                Rent Now
              </button>
            </CardFooter>
          </Card>

          <Card className='w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between'>
            <CardHeader>
              <CardTitle className='w-full flex items-center justify-between'>
                CR - V{" "}
                <Image src={"/heart 2.png"} alt='' width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className='w-full flex flex-col items-center justify-center gap-4'>
              <Image src={"/suv (4).png"} alt='' width={220} height={68} />
              <Image
                src={"/Spesification.png"}
                alt=''
                width={256}
                height={24}
              />
            </CardContent>
            <CardFooter className='w-full flex items-center justify-between'>
              <p>
                $99.00/<span className='text-gray-500'>day</span>
              </p>
              <button className='bg-[#3563e9] p-2 text-white rounded-md hover:bg-[#54A6FF] active:bg-[#3563e9] active:scale-95 transition-all shadow-md'>
                Rent Now
              </button>
            </CardFooter>
          </Card>

          <Card className='w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between'>
            <CardHeader>
              <CardTitle className='w-full flex items-center justify-between'>
                All New Terios{" "}
                <Image src={"/heart.png"} alt='' width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className='w-full flex flex-col items-center justify-center gap-4'>
              <Image src={"/suv (4).png"} alt='' width={220} height={68} />
              <Image
                src={"/Spesification.png"}
                alt=''
                width={256}
                height={24}
              />
            </CardContent>
            <CardFooter className='w-full flex items-center justify-between'>
              <p>
                $99.00/<span className='text-gray-500'>day</span>
              </p>
              <button className='bg-[#3563e9] p-2 text-white rounded-md hover:bg-[#54A6FF] active:bg-[#3563e9] active:scale-95 transition-all shadow-md'>
                Rent Now
              </button>
            </CardFooter>
          </Card>

          <Card className='w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between'>
            <CardHeader>
              <CardTitle className='w-full flex items-center justify-between'>
                CR - V{" "}
                <Image src={"/heart 2.png"} alt='' width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className='w-full flex flex-col items-center justify-center gap-4'>
              <Image src={"/suv (4).png"} alt='' width={220} height={68} />
              <Image
                src={"/Spesification.png"}
                alt=''
                width={256}
                height={24}
              />
            </CardContent>
            <CardFooter className='w-full flex items-center justify-between'>
              <p>
                $99.00/<span className='text-gray-500'>day</span>
              </p>
              <button className='bg-[#3563e9] p-2 text-white rounded-md hover:bg-[#54A6FF] active:bg-[#3563e9] active:scale-95 transition-all shadow-md'>
                Rent Now
              </button>
            </CardFooter>
          </Card>
        </div>
        <div className='sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          <Card className='w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between'>
            <CardHeader>
              <CardTitle className='w-full flex items-center justify-between'>
                MG ZX Exclusive{" "}
                <Image src={"/heart.png"} alt='' width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className='w-full flex flex-col items-center justify-center gap-4'>
              <Image src={"/suv.png"} alt='' width={220} height={68} />
              <Image
                src={"/Spesification.png"}
                alt=''
                width={256}
                height={24}
              />
            </CardContent>
            <CardFooter className='w-full flex items-center justify-between'>
              <p>
                $99.00/<span className='text-gray-500'>day</span>
              </p>
              <button className='bg-[#3563e9] p-2 text-white rounded-md hover:bg-[#54A6FF] active:bg-[#3563e9] active:scale-95 transition-all shadow-md'>
                Rent Now
              </button>
            </CardFooter>
          </Card>

          <Card className='w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between'>
            <CardHeader>
              <CardTitle className='w-full flex items-center justify-between'>
                NEW MG ZS{" "}
                <Image src={"/heart 2.png"} alt='' width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className='w-full flex flex-col items-center justify-center gap-4'>
              <Image src={"/suv.png"} alt='' width={220} height={68} />
              <Image
                src={"/Spesification.png"}
                alt=''
                width={256}
                height={24}
              />
            </CardContent>
            <CardFooter className='w-full flex items-center justify-between'>
              <p>
                $99.00/<span className='text-gray-500'>day</span>
              </p>
              <button className='bg-[#3563e9] p-2 text-white rounded-md hover:bg-[#54A6FF] active:bg-[#3563e9] active:scale-95 transition-all shadow-md'>
                Rent Now
              </button>
            </CardFooter>
          </Card>

          <Card className='w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between'>
            <CardHeader>
              <CardTitle className='w-full flex items-center justify-between'>
                MG ZX Excite{" "}
                <Image src={"/heart.png"} alt='' width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className='w-full flex flex-col items-center justify-center gap-4'>
              <Image src={"/suv (4).png"} alt='' width={220} height={68} />
              <Image
                src={"/Spesification.png"}
                alt=''
                width={256}
                height={24}
              />
            </CardContent>
            <CardFooter className='w-full flex items-center justify-between'>
              <p>
                $99.00/<span className='text-gray-500'>day</span>
              </p>
              <button className='bg-[#3563e9] p-2 text-white rounded-md hover:bg-[#54A6FF] active:bg-[#3563e9] active:scale-95 transition-all shadow-md'>
                Rent Now
              </button>
            </CardFooter>
          </Card>

          <Card className='w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between'>
            <CardHeader>
              <CardTitle className='w-full flex items-center justify-between'>
                New MG ZS
                <Image src={"/heart 2.png"} alt='' width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className='w-full flex flex-col items-center justify-center gap-4'>
              <Image src={"/suv (4).png"} alt='' width={220} height={68} />
              <Image
                src={"/Spesification.png"}
                alt=''
                width={256}
                height={24}
              />
            </CardContent>
            <CardFooter className='w-full flex items-center justify-between'>
              <p>
                $99.00/<span className='text-gray-500'>day</span>
              </p>
              <button className='bg-[#3563e9] p-2 text-white rounded-md hover:bg-[#54A6FF] active:bg-[#3563e9] active:scale-95 transition-all shadow-md'>
                Rent Now
              </button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className='button w-full text-center'>
        <Link href={"/categories"}>
          <button className='bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5 hover:bg-[#54A6FF] active:bg-[#3563e9] active:scale-95 transition-all shadow-md'>
            Show More Cars
          </button>
        </Link>
      </section>
    </div>
  );
}
