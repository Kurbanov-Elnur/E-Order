import Accordion from '../../Components/Accordion/Accordion';
import MainButtons from '../../Components/MainButtons/MainButtons';
import './Info.scss';

export default function Info() {
    return (
        <div className='info'>
            <MainButtons />
            <div className='accordion-section'>
                <Accordion question={'Hansı növ avtomobil ehtiyat hissələri satırsınız?'} answer={'Biz müxtəlif növ avtomobil ehtiyat hissələri təklif edirik, o cümlədən mühərrik hissələri, təkərlər, əyləc sistemləri və s.'} />
                <Accordion question={'Ehtiyat hissələrinin zəmanəti varmı?'} answer={'Bəli, bütün ehtiyat hissələrimizə müəyyən müddətə zəmanət verilir. Ətraflı məlumat üçün zəhmət olmasa bizimlə əlaqə saxlayın.'} />
                <Accordion question={'Ehtiyat hissələrini necə sifariş edə bilərəm?'} answer={'Ehtiyat hissələri üçün sifarişi bizim vebsaytımız üzərindən və ya telefonla verə bilərsiniz.'} />
                <Accordion question={'Sifarişi necə ödəyə bilərəm?'} answer={'Biz kredit kartları, bank köçürmələri və digər ödəniş üsulları ilə ödənişləri qəbul edirik.'} />
                <Accordion question={'Ehtiyat hissələrinin çatdırılma müddəti nə qədərdir?'} answer={'Çatdırılma müddəti təxminən 3-5 iş günü təşkil edir. Lakin ərazinizə və məhsul mövcudluğuna görə dəyişə bilər.'} />
            </div>
        </div>
    )
}