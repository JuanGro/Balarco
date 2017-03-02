import { ComponentFixture, TestBed, async } from '@angular/core/testing';

// Model
import { Contact } from './contact-model';

describe('ClubMemberModel', () => {
    it('should return the correct properties', () => {
    
        var newContact = new Contact();
        newContact.id = 10;
        newContact.name = 'John';
        newContact.last_name = 'Smith';
        newContact.client = 2;
        newContact.charge = 'CEO';
        newContact.landline = '2221122';
        newContact.extension = '29';
        newContact.mobile_phone_1 = '4423331122';
        newContact.mobile_phone_2 = '4423331122';
        newContact.email = 'john@gmail.com';
        newContact.alternate_email = 'john@gmail.com';
        newContact.is_active = true;
    
        expect(newContact.id).toBe(10);
        expect(newContact.name).toBe('John');
        expect(newContact.last_name).toBe('Smith');
        expect(newContact.client).toBe(2);
        expect(newContact.charge).toBe('CEO');
        expect(newContact.landline).toBe('2221122');
        expect(newContact.extension).toBe('29');
        expect(newContact.mobile_phone_1).toBe('4423331122');
        expect(newContact.mobile_phone_2).toBe('4423331122');
        expect(newContact.email).toBe('john@gmail.com');
        expect(newContact.alternate_email).toBe('john@gmail.com');
        expect(newContact.is_active).toBe(true);
    });
});