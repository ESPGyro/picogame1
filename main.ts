const PG_ADDR = 0x66
//% color="#AA278D" icon="\uf1b9" weight=50
namespace Picogame {
    //% block
    //% blockId=sensor_read block="read sensor |%address"
    //% address.min=1 address.max=5 address.defl=1
    export function i2cRead(address: number): number {
	    let i2cbuf = pins.createBuffer(2)
        i2cbuf[0] = 255
        i2cbuf[1] = 255
        pins.i2cWriteBuffer(PG_ADDR, i2cbuf)
        let readbuf = pins.i2cReadBuffer(PG_ADDR, 1)
        return readbuf[0]
    }
    //% blockId=sensor_write block="write value |%v"
    //% v.min=0 v.max=200
    export function i2cwrite(v: number): void {
        pins.i2cWriteNumber(PG_ADDR, v, NumberFormat.UInt16BE, false)
    }

}
