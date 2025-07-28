import React from 'react'
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@/components/ui/modal"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { UserModalProps } from '@/model/UserModal';
import { useUserFormHandlers } from '@/hooks/useDebounce';
 

export default function UserModal({ 
    isOpen, 
    onOpen, 
    onOpenChange, 
    formData, 
    setFormData, 
    onSubmit 
}: UserModalProps) {

    // Use debounced form handlers with smooth typing (300ms delay)
    const {
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
    } = useUserFormHandlers(formData, setFormData, 300);

    return (
        <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
            <Form onSubmit={onSubmit}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Add New User</ModalHeader>
                            <ModalBody className="gap-4">
                                {/* Hidden ID field - will be generated automatically */}
                                <input 
                                    type="hidden" 
                                    name="id" 
                                    value={formData.id} 
                                />
                                
                                {/* Basic User Information */}
                                <div className="grid grid-cols-2 gap-4">
                                    <Input
                                        name="name"
                                        label="Full Name"
                                        placeholder="Enter full name"
                                        variant="bordered"
                                        {...nameInput}
                                        required
                                    />
                                    <Input
                                        name="username"
                                        label="Username"
                                        placeholder="Enter username"
                                        variant="bordered"
                                        {...usernameInput}
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <Input
                                        name="email"
                                        label="Email"
                                        placeholder="Enter email address"
                                        type="email"
                                        variant="bordered"
                                        {...emailInput}
                                        required
                                    />
                                    <Input
                                        name="phone"
                                        label="Phone"
                                        placeholder="Enter phone number"
                                        variant="bordered"
                                        {...phoneInput}
                                        required
                                    />
                                </div>

                                <Input
                                    name="website"
                                    label="Website"
                                    placeholder="Enter website URL"
                                    variant="bordered"
                                    {...websiteInput}
                                    required
                                />

                                {/* Address Information */}
                                <div className="border-t pt-4">
                                    <h4 className="text-sm font-semibold mb-3 text-gray-600">Address Information</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        <Input
                                            name="address.street"
                                            label="Street"
                                            placeholder="Enter street address"
                                            variant="bordered"
                                            {...addressStreetInput}
                                            required
                                        />
                                        <Input
                                            name="address.suite"
                                            label="Suite"
                                            placeholder="Enter suite/apartment"
                                            variant="bordered"
                                            {...addressSuiteInput}
                                            required
                                        />
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-4 mt-4">
                                        <Input
                                            name="address.city"
                                            label="City"
                                            placeholder="Enter city"
                                            variant="bordered"
                                            {...addressCityInput}
                                            required
                                        />
                                        <Input
                                            name="address.zipcode"
                                            label="Zipcode"
                                            placeholder="Enter zipcode"
                                            variant="bordered"
                                            {...addressZipcodeInput}
                                            required
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mt-4">
                                        <Input
                                            name="address.geo.lat"
                                            label="Latitude"
                                            placeholder="Enter latitude"
                                            variant="bordered"
                                            {...geoLatInput}
                                            required
                                        />
                                        <Input
                                            name="address.geo.lng"
                                            label="Longitude"
                                            placeholder="Enter longitude"
                                            variant="bordered"
                                            {...geoLngInput}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Company Information */}
                                <div className="border-t pt-4">
                                    <h4 className="text-sm font-semibold mb-3 text-gray-600">Company Information</h4>
                                    <Input
                                        name="company.name"
                                        label="Company Name"
                                        placeholder="Enter company name"
                                        variant="bordered"
                                        {...companyNameInput}
                                        required
                                    />
                                    
                                    <div className="grid grid-cols-1 gap-4 mt-4">
                                        <Input
                                            name="company.catchPhrase"
                                            label="Catch Phrase"
                                            placeholder="Enter company catch phrase"
                                            variant="bordered"
                                            {...companyCatchPhraseInput}
                                            required
                                        />
                                        <Input
                                            name="company.bs"
                                            label="Business Description"
                                            placeholder="Enter business description"
                                            variant="bordered"
                                            {...companyBsInput}
                                            required
                                        />
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Cancel
                                </Button>
                                <Button color="primary" type="submit">
                                    Add User
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Form>
        </Modal>
    );
}
