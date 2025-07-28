import { useCallback, useState, useRef, useEffect } from 'react';
import UserInfo from '@/model/User';


// Hook for smooth typing with debounced state updates
export const useDebouncedInput = (
    initialValue: string,
    onDebouncedChange: (value: string) => void,
    delay: number = 300
) => {
    const [localValue, setLocalValue] = useState(initialValue);
    const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout>();

    // Update local value when initialValue changes (from parent)
    useEffect(() => {
        setLocalValue(initialValue);
    }, [initialValue]);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        
        // Update local state immediately for smooth typing
        setLocalValue(newValue);
        
        // Clear existing timer
        if (debounceTimer) {
            clearTimeout(debounceTimer);
        }
        
        // Set new debounced timer for parent state update
        const newTimer = setTimeout(() => {
            onDebouncedChange(newValue);
        }, delay);
        
        setDebounceTimer(newTimer);
    }, [onDebouncedChange, delay, debounceTimer]);

    return {
        value: localValue,
        onChange: handleChange
    };
};

// Enhanced form handlers with smooth typing
export const useUserFormHandlers = (
    formData: UserInfo, 
    setFormData: React.Dispatch<React.SetStateAction<UserInfo>>,
    delay: number = 300
) => {
    // Create debounced update functions for each field
    const updateName = useCallback((value: string) => {
        setFormData(prev => ({ ...prev, name: value }));
    }, [setFormData]);

    const updateUsername = useCallback((value: string) => {
        setFormData(prev => ({ ...prev, username: value }));
    }, [setFormData]);

    const updateEmail = useCallback((value: string) => {
        setFormData(prev => ({ ...prev, email: value }));
    }, [setFormData]);

    const updatePhone = useCallback((value: string) => {
        setFormData(prev => ({ ...prev, phone: value }));
    }, [setFormData]);

    const updateWebsite = useCallback((value: string) => {
        setFormData(prev => ({ ...prev, website: value }));
    }, [setFormData]);

    const updateAddressStreet = useCallback((value: string) => {
        setFormData(prev => ({ ...prev, address: { ...prev.address, street: value } }));
    }, [setFormData]);

    const updateAddressSuite = useCallback((value: string) => {
        setFormData(prev => ({ ...prev, address: { ...prev.address, suite: value } }));
    }, [setFormData]);

    const updateAddressCity = useCallback((value: string) => {
        setFormData(prev => ({ ...prev, address: { ...prev.address, city: value } }));
    }, [setFormData]);

    const updateAddressZipcode = useCallback((value: string) => {
        setFormData(prev => ({ ...prev, address: { ...prev.address, zipcode: value } }));
    }, [setFormData]);

    const updateGeoLat = useCallback((value: string) => {
        setFormData(prev => ({ 
            ...prev, 
            address: { 
                ...prev.address, 
                geo: { ...prev.address.geo, lat: value } 
            } 
        }));
    }, [setFormData]);

    const updateGeoLng = useCallback((value: string) => {
        setFormData(prev => ({ 
            ...prev, 
            address: { 
                ...prev.address, 
                geo: { ...prev.address.geo, lng: value } 
            } 
        }));
    }, [setFormData]);

    const updateCompanyName = useCallback((value: string) => {
        setFormData(prev => ({ ...prev, company: { ...prev.company, name: value } }));
    }, [setFormData]);

    const updateCompanyCatchPhrase = useCallback((value: string) => {
        setFormData(prev => ({ ...prev, company: { ...prev.company, catchPhrase: value } }));
    }, [setFormData]);

    const updateCompanyBs = useCallback((value: string) => {
        setFormData(prev => ({ ...prev, company: { ...prev.company, bs: value } }));
    }, [setFormData]);

    // Create debounced inputs for each field
    const nameInput = useDebouncedInput(formData.name, updateName, delay);
    const usernameInput = useDebouncedInput(formData.username, updateUsername, delay);
    const emailInput = useDebouncedInput(formData.email, updateEmail, delay);
    const phoneInput = useDebouncedInput(formData.phone, updatePhone, delay);
    const websiteInput = useDebouncedInput(formData.website, updateWebsite, delay);
    const addressStreetInput = useDebouncedInput(formData.address.street, updateAddressStreet, delay);
    const addressSuiteInput = useDebouncedInput(formData.address.suite, updateAddressSuite, delay);
    const addressCityInput = useDebouncedInput(formData.address.city, updateAddressCity, delay);
    const addressZipcodeInput = useDebouncedInput(formData.address.zipcode, updateAddressZipcode, delay);
    const geoLatInput = useDebouncedInput(formData.address.geo.lat, updateGeoLat, delay);
    const geoLngInput = useDebouncedInput(formData.address.geo.lng, updateGeoLng, delay);
    const companyNameInput = useDebouncedInput(formData.company.name, updateCompanyName, delay);
    const companyCatchPhraseInput = useDebouncedInput(formData.company.catchPhrase, updateCompanyCatchPhrase, delay);
    const companyBsInput = useDebouncedInput(formData.company.bs, updateCompanyBs, delay);

    return {
        nameInput,
        usernameInput,
        emailInput,
        phoneInput,
        websiteInput,
        addressStreetInput,
        addressSuiteInput,
        addressCityInput,
        addressZipcodeInput,
        geoLatInput,
        geoLngInput,
        companyNameInput,
        companyCatchPhraseInput,
        companyBsInput
    };
}; 