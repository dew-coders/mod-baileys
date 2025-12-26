import { USyncQueryProtocol } from 'mod-baileys/lib/Types/USync';
import { BinaryNode } from 'mod-baileys/lib/WABinary';
export type DisappearingModeData = {
    duration: number;
    setAt?: Date;
};
export declare class USyncDisappearingModeProtocol implements USyncQueryProtocol {
    name: string;
    getQueryElement(): BinaryNode;
    getUserElement(): null;
    parser(node: BinaryNode): DisappearingModeData | undefined;
}
