import { Schema, type } from '@colyseus/schema'

export type TCardOptions = Pick<Card, 'cardId' | 'suit' | 'text' | 'subtext' | 'faceSideUrl' | 'backSideUrl' | 'revealed' >

export class Card extends Schema {
    @type('string')
    public cardId: string

    @type('string')
    public suit: string

    @type('string')
    public text: string

    @type('string')
    public subtext: string

    @type('string')
    public faceSideUrl: string

    @type('string')
    public backSideUrl: string

    @type('boolean')
    public revealed: boolean = false

    constructor({ cardId, suit, text, subtext, faceSideUrl, backSideUrl, revealed }: TCardOptions) {
        super()
        this.cardId = cardId
        this.suit = suit
        this.text = text
        this.subtext = subtext
        this.faceSideUrl = faceSideUrl
        this.backSideUrl = backSideUrl
        this.revealed
    }
}