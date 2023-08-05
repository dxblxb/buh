import NavbarItem from "../NavbarItem/NavbarItem";

const Navbar = () => {
    return (
        <div className='navbar'>
            <NavbarItem type={'SALES'} name={'Продажи'}/>
            <NavbarItem type={'PURCHASES'} name={'Закупки'}/>
            <NavbarItem type={'STOCK'}name={'Склад'}/>
            <NavbarItem type={'NOMENCLATURE'}name={'Номенклатура'}/>
        </div>
    )
}
export default Navbar;