import Brands from '../../Components/Brands/Brands';
import MainButtons from '../../Components/MainButtons/MainButtons';
import './AboutBrands.scss';

export default function AboutBrands() {
  return (
    <div className='about-brands'>
        <MainButtons />
        <Brands />
    </div>
  )
}